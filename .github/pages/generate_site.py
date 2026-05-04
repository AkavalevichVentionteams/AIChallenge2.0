from __future__ import annotations

from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[2]
SITE_DIR = ROOT / "_site"
TEMPLATE_FILE = ROOT / ".github" / "pages" / "index.template.html"


def main() -> None:
    if SITE_DIR.exists():
        shutil.rmtree(SITE_DIR)
    SITE_DIR.mkdir(parents=True, exist_ok=True)

    task_links: list[str] = []

    for task_dir in sorted(ROOT.glob("task-*")):
        if task_dir.is_dir():
            shutil.copytree(task_dir, SITE_DIR / task_dir.name)
            task_links.append(f'    <li><a href="./{task_dir.name}/">{task_dir.name}</a></li>')

    if not task_links:
        task_links = ["    <li>No task pages found.</li>"]

    template = TEMPLATE_FILE.read_text(encoding="utf-8")
    index_html = template.replace("__TASK_LINKS__", "\n".join(task_links))
    (SITE_DIR / "index.html").write_text(index_html, encoding="utf-8")


if __name__ == "__main__":
    main()
