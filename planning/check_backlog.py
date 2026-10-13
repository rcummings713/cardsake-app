import json
from datetime import date
from pathlib import Path
from render_backlog import render

data = json.loads((Path(__file__).parent / "backlog.json").read_text())
ids = set()
hours = 0
week_hours = {"12–18": 0, "19–25": 0, "26–31": 0}
stories = {}
titles = set()
for epic in data["epics"]:
    assert epic["id"] not in ids
    ids.add(epic["id"])
    for story in epic["stories"]:
        assert story["id"] not in ids and story["acceptance"]
        ids.add(story["id"])
        stories[story["id"]] = story
        assert story['title'] not in titles, f"Duplicate story title: {story['title']}"
        titles.add(story['title'])
        if story["target_date"]:
            d = date.fromisoformat(story["target_date"])
            assert d.year == 2026 and d.month == 10 and 12 <= d.day <= 31
            assert isinstance(story['estimate_hours'], int) and story['estimate_hours'] > 0
            assert story["release"] == "October 2026 private MVP"
            hours += story["estimate_hours"]
            key = "12–18" if d.day <= 18 else "19–25" if d.day <= 25 else "26–31"
            week_hours[key] += story["estimate_hours"]
        else:
            assert story["release"] == "Post-MVP" and story["estimate_hours"] is None
assert hours == data["october_target_hours"], hours
assert week_hours == data['october_week_hours'], week_hours

visited, visiting = set(), set()
def check_dependencies(story_id):
    assert story_id not in visiting, f"Dependency cycle at {story_id}"
    if story_id in visited:
        return
    visiting.add(story_id)
    story = stories[story_id]
    dependencies = story.get('depends_on', [])
    assert len(dependencies) == len(set(dependencies)), story_id
    for dependency in dependencies:
        assert dependency in stories, f"Unknown blocker {dependency} for {story_id}"
        if story['target_date']:
            assert stories[dependency]['target_date'], f"October work blocked by Post-MVP: {story_id}"
            assert stories[dependency]['target_date'] <= story['target_date'], f"Blocker scheduled too late: {story_id}"
        check_dependencies(dependency)
    visiting.remove(story_id)
    visited.add(story_id)

for story_id in stories:
    check_dependencies(story_id)

def prerequisites(story_id):
    result = set(stories[story_id].get('depends_on', []))
    for dependency in tuple(result):
        result.update(prerequisites(dependency))
    return result

for story_id, story in stories.items():
    dependencies = story.get('depends_on', [])
    for dependency in dependencies:
        assert not any(dependency in prerequisites(other) for other in dependencies if other != dependency), f'Redundant blocker {dependency} for {story_id}'
assert (Path(__file__).parent / 'backlog.md').read_text() == render(data), 'Run planning/render_backlog.py'
print(f"Backlog valid: {len(data['epics'])} epics, {len(ids)-len(data['epics'])} stories, {hours} October hours.")
