import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { tags, tasks, tasksTags, notes, notesTags, habits } from "./schema";

const sqlite = new Database("sqlite.db");
sqlite.pragma("journal_mode = WAL");
const db = drizzle(sqlite);

async function seed() {
  // Tags
  const [work, personal, health, learning] = await Promise.all([
    db
      .insert(tags)
      .values({ name: "Work", color: "#3b82f6" })
      .returning()
      .then((r) => r[0]),
    db
      .insert(tags)
      .values({ name: "Personal", color: "#10b981" })
      .returning()
      .then((r) => r[0]),
    db
      .insert(tags)
      .values({ name: "Health", color: "#ef4444" })
      .returning()
      .then((r) => r[0]),
    db
      .insert(tags)
      .values({ name: "Learning", color: "#8b5cf6" })
      .returning()
      .then((r) => r[0]),
  ]);

  // Tasks
  const [task1, task2, task3] = await Promise.all([
    db
      .insert(tasks)
      .values({
        title: "Set up project CI/CD",
        description: "Configure GitHub Actions for build and lint checks",
        priority: "high",
        dueDate: "2026-03-20",
      })
      .returning()
      .then((r) => r[0]),
    db
      .insert(tasks)
      .values({
        title: "Plan weekly meal prep",
        description: "Research healthy recipes and make shopping list",
        priority: "medium",
        dueDate: "2026-03-18",
      })
      .returning()
      .then((r) => r[0]),
    db
      .insert(tasks)
      .values({
        title: "Read chapter 5 of Designing Data-Intensive Apps",
        priority: "low",
      })
      .returning()
      .then((r) => r[0]),
  ]);

  // Task-Tag associations
  await db.insert(tasksTags).values([
    { taskId: task1.id, tagId: work.id },
    { taskId: task2.id, tagId: personal.id },
    { taskId: task2.id, tagId: health.id },
    { taskId: task3.id, tagId: learning.id },
  ]);

  // Notes
  const [note1, note2] = await Promise.all([
    db
      .insert(notes)
      .values({
        title: "Architecture decisions",
        content:
          "## Stack\n\n- Next.js 16 + App Router\n- SQLite via Drizzle ORM\n- Tailwind CSS 4\n\n## Principles\n\n- Local-first data\n- Minimal dependencies\n- Ship fast, iterate",
      })
      .returning()
      .then((r) => r[0]),
    db
      .insert(notes)
      .values({
        title: "Daily standup template",
        content:
          "## Yesterday\n\n- \n\n## Today\n\n- \n\n## Blockers\n\n- None",
      })
      .returning()
      .then((r) => r[0]),
  ]);

  // Note-Tag associations
  await db.insert(notesTags).values([
    { noteId: note1.id, tagId: work.id },
    { noteId: note2.id, tagId: work.id },
  ]);

  // Habits
  await db.insert(habits).values([
    { name: "Morning meditation", frequency: "daily", streakCount: 5 },
    { name: "Exercise", frequency: "daily", streakCount: 3 },
    { name: "Read 30 minutes", frequency: "daily", streakCount: 12 },
    { name: "Weekly review", frequency: "weekly", streakCount: 2 },
  ]);

  console.log("Seed complete.");
  sqlite.close();
}

seed();
