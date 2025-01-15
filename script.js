// Unlock functionality
const unlockInput = document.getElementById("unlock-input");
const unlockButton = document.getElementById("unlock-button");

// Function to handle unlocking
function handleUnlock() {
  const inputCode = unlockInput.value.trim(); // Remove leading/trailing spaces
  if (inputCode === "test") {
    localStorage.setItem("unlocked", "true"); // Store the unlocked state
    document.getElementById("unlock-section").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    alert("Incorrect code! Please try again.");
    unlockInput.value = ""; // Clear the input field
  }
}

// Add event listeners for unlocking actions
if (unlockButton) {
  unlockButton.addEventListener("click", handleUnlock);
  unlockInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleUnlock();
    }
  });
}

// Check the unlock state on page load
window.addEventListener("load", function () {
  const unlocked = localStorage.getItem("unlocked");
  if (unlocked === "true") {
    document.getElementById("unlock-section").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }
});

// Lesson data
const lessons = {
  1: {
    title: "Lesson 1: Understanding the Guitar",
    description: "Learn the basics of the guitar and its components.",
    video: "https://example.com/lesson1.mp4",
  },
  2: {
    title: "Lesson 2: Basic Chords",
    description: "Discover the fundamental chords to start playing songs.",
    video: "https://example.com/lesson2.mp4",
  },
  3: {
    title: "Lesson 3: Strumming Techniques",
    description: "Master essential strumming patterns to add rhythm.",
    video: "https://example.com/lesson3.mp4",
  },
  4: {
    title: "Lesson 4: Scales and Melodies",
    description: "Understand scales and how to use them for melodies.",
    video: "https://example.com/lesson4.mp4",
  },
  5: {
    title: "Lesson 5: Playing a Song",
    description: "Put it all together and learn to play a complete song.",
    video: "https://example.com/lesson5.mp4",
  },
};

// Tracks the current lesson ID
let currentLessonId = null;

// Load a lesson and display its content
function loadLesson(lessonId) {
  const lesson = lessons[lessonId];
  if (!lesson) {
    alert("Lesson not found!");
    return;
  }

  currentLessonId = lessonId;
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-description").textContent =
    lesson.description;
  document.getElementById("video-source").src = lesson.video;
  document.getElementById("lesson-video").load();
  document.getElementById("lesson-list").classList.add("hidden");
  document.getElementById("lesson-content").classList.remove("hidden");
}

// Return to the lesson list
function closeLesson() {
  document.getElementById("lesson-content").classList.add("hidden");
  document.getElementById("lesson-list").classList.remove("hidden");
  const videoPlayer = document.getElementById("lesson-video");
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

// Redirect to the homepage main section
function goToHomepage() {
  window.location.href = "index.html#main-content";
}

// Scale data
const scales = {
  "c-sharp-major": {
    title: "C# Major Scale",
    image:
      "https://cdn.glitch.global/38a1c147-d500-4749-857e-777a8be11d30/c%23%20major.png?v=1736841092524",
  },
  "d-sharp-pentatonic-blues": {
    title: "D# Pentatonic Blues Scale",
    image:
      "https://cdn.glitch.global/38a1c147-d500-4749-857e-777a8be11d30/D%23%20Pentatonic%20Blues.png?v=1736841101589",
  },
  "a-sharp-pentatonic-neutral": {
    title: "A# Pentatonic Neutral Scale",
    image:
      "https://cdn.glitch.global/38a1c147-d500-4749-857e-777a8be11d30/A%23%20Pentatonic%20Neutral.png?v=1736840946900",
  },
  "c-locrian": {
    title: "C Locrian Scale",
    image:
      "https://cdn.glitch.global/38a1c147-d500-4749-857e-777a8be11d30/C%20Locrian.png?v=1736841086782",
  },
};

// Show a scale
function showScale(scaleId) {
  const scale = scales[scaleId];
  if (!scale) {
    alert("Scale not found!");
    return;
  }

  document.getElementById("scale-title").textContent = scale.title;
  document.getElementById("scale-image").src = scale.image;
  document.getElementById("scales-list").classList.add("hidden");
  document.getElementById("scale-content").classList.remove("hidden");
}

// Close the scale view
function closeScale() {
  document.getElementById("scale-content").classList.add("hidden");
  document.getElementById("scales-list").classList.remove("hidden");
}

// Riff data
const riffs = {
  riff1: {
    title: "Beginner Riff",
    image:
      "https://cdn.glitch.global/38a1c147-d500-4749-857e-777a8be11d30/A%23%20Pentatonic%20Neutral.png?v=1736840946900",
  },
  riff2: {
    title: "Slightly Challenging Riff",
    image: "https://example.com/riff2.png",
  },
  riff3: {
    title: "Intermediate Riff",
    image: "https://example.com/riff3.png",
  },
  riff4: {
    title: "Advanced Beginner Riff",
    image: "https://example.com/riff4.png",
  },
  riff5: {
    title: "Moderate Riff",
    image: "https://example.com/riff5.png",
  },
  riff6: {
    title: "Difficult Riff",
    image: "https://example.com/riff6.png",
  },
  riff7: {
    title: "Expert Riff",
    image: "https://example.com/riff7.png",
  },
  duet: {
    title: "🎶 Bonus Duet Riff",
    image: "https://example.com/duet.png",
  },
};

// Show a riff
function showRiff(riffId) {
  const riff = riffs[riffId];
  if (!riff) {
    alert("Riff not found!");
    return;
  }

  document.getElementById("riff-title").textContent = riff.title;
  document.getElementById("riff-image").src = riff.image;
  document.getElementById("riffs-list").classList.add("hidden");
  document.getElementById("riff-content").classList.remove("hidden");
}

// Close the riff view
function closeRiff() {
  document.getElementById("riff-content").classList.add("hidden");
  document.getElementById("riffs-list").classList.remove("hidden");
}

// Extra Tips Navigation
function goToExtraTips() {
  window.location.href = "extra-tips.html";
}
