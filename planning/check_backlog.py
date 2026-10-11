import json
from datetime import date
from pathlib import Path

data = json.loads((Path(__file__).parent / "backlog.json").read_text())
ids = set()
hours = 0
week_hours = {"12–18": 0, "19–25": 0, "26–31": 0}
for epic in data["epics"]:
    assert epic["id"] not in ids
    ids.add(epic["id"])
    for story in epic["stories"]:
        assert story["id"] not in ids and story["acceptance"]
        ids.add(story["id"])
        if story["target_date"]:
            d = date.fromisoformat(story["target_date"])
            assert d.year == 2026 and d.month == 10 and 12 <= d.day <= 31
            assert story["estimate_hours"] and story["release"] == "October 2026 private MVP"
            hours += story["estimate_hours"]
            key = "12–18" if d.day <= 18 else "19–25" if d.day <= 25 else "26–31"
            week_hours[key] += story["estimate_hours"]
        else:
            assert story["release"] == "Post-MVP" and story["estimate_hours"] is None
assert hours == data["october_target_hours"] == 156, hours
assert week_hours == {"12–18": 48, "19–25": 54, "26–31": 54}, week_hours
print(f"Backlog valid: {len(data['epics'])} epics, {len(ids)-len(data['epics'])} stories, {hours} October hours.")
