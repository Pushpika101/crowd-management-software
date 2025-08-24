const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Temporary event data
const events = [
  {
    id: "E1",
    name: "Robotics Expo",
    location: "Lec Hall 6",
    date: "2025-09-05",
    startTime: "10:00",
    endTime: "12:00",
    description: "An exhibition showcasing student-built robots with live demos.",
    organizer: "Robotics Club",
    interestedCount: 23
  },
  {
    id: "E2",
    name: "AI Workshop",
    location: "Room 12",
    date: "2025-09-05",
    startTime: "14:00",
    endTime: "16:00",
    description: "Hands-on workshop covering AI basics and building ML models.",
    organizer: "AI Society",
    interestedCount: 40
  },
  {
    id: "E3",
    name: "E21 Exhibit",
    location: "Lec Hall 11",
    date: "2025-09-06",
    startTime: "09:00",
    endTime: "11:30",
    description: "Student innovations in electronics and IoT systems.",
    organizer: "Department of Electrical Engineering",
    interestedCount: 15
  },
  {
    id: "E4",
    name: "E21 Exhibit",
    location: "Computer Dept",
    date: "2025-09-06",
    startTime: "13:00",
    endTime: "15:00",
    description: "Software engineering projects and interactive demos.",
    organizer: "Department of Computer Engineering",
    interestedCount: 18
  }
];

// Route 1: List all events
app.get("/events", (req, res) => {
  res.json(events);
});

// Route 2: Create a dummy share link
app.post("/share/:eventId", (req, res) => {
  const { eventId } = req.params;
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }

  // Fake share link for now
  const shareLink = `http://localhost:${PORT}/share/${eventId}`;
  res.json({ message: "Share link created!", shareLink });
});

// Route 3: Use the share link
app.get("/share/:eventId", (req, res) => {
  const { eventId } = req.params;
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: "Invalid link" });
  }

  res.json({ event });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});