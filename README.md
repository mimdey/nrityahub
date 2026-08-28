# NrityaHub

NrityaHub is a Bharatanatyam-themed community forum where users can create posts, share performances, discuss mudras, explore Indian classical dance topics, and interact through comments and upvotes.

The project combines a culturally inspired visual design with interactive forum functionality and persistent backend storage using Supabase.

## 🌐 Live Demo

**Website:**
https://rococo-bublanina-58cdbd.netlify.app/

## ✨ Features

* Create and publish forum posts
* Add titles, written content, and external image URLs
* Browse a feed of previously created posts
* View post creation time and upvote count
* Search posts by title
* Sort posts by creation time or upvotes
* Open individual posts for detailed viewing
* Leave comments on posts
* Upvote posts
* Edit existing posts
* Delete posts
* Secret-key protection for editing and deleting posts
* Organize posts by category
* Category badges for easier browsing
* Responsive layout for different screen sizes
* Persistent data storage using Supabase
* Bharatanatyam-inspired visual design with custom styling and animations

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* Vite

### Backend / Database

* Supabase

### Deployment & Tools

* Netlify
* Git
* GitHub

## ⚙️ How It Works

NrityaHub uses React for the user interface and Supabase for persistent data storage.

Users can create forum posts with titles, content, images, and categories. Posts are stored in Supabase and displayed in the main feed, where users can search and sort content.

Each post has its own page where users can view additional content, leave comments, upvote the post, and manage it using a secret key created at the time of posting.

The application is deployed using Netlify and includes routing configuration to support React navigation in production.

## 💻 Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/mimdey/nrityahub.git
cd nrityahub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create the required environment variables for your Supabase project.

Sensitive credentials should be stored in environment variables and should never be committed to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL where you can view the application.

## 💡 What I Learned

Building NrityaHub gave me experience creating a more interactive web application with persistent data and user-generated content.

Through this project, I practiced:

* Building reusable React components
* Creating forms for user-generated content
* Connecting a React application to Supabase
* Performing create, read, update, and delete operations
* Implementing comments and upvote functionality
* Building search and sorting functionality
* Managing application routing
* Using environment variables securely
* Debugging deployment and configuration issues
* Handling React routing with Netlify
* Designing a responsive interface around a specific cultural theme
* Using visual design, typography, color, and interaction to create a distinct user experience

One of the main goals of the project was to create a forum that felt visually connected to Bharatanatyam rather than using a generic social-media interface.

## 🚀 Future Improvements

Possible future improvements include:

* Full user authentication
* User profiles
* Saved or bookmarked posts
* Improved moderation tools
* More advanced filtering
* Improved image upload support
* Notification features
* Additional accessibility improvements

## 🎥 Video Walkthrough

A walkthrough of the original project is available here:

<div>
    <a href="https://www.loom.com/share/086c0cc6fb3d4c60bfa9a31d2a07af5f">
      <p>nrityahub - 27 April 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/086c0cc6fb3d4c60bfa9a31d2a07af5f">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/086c0cc6fb3d4c60bfa9a31d2a07af5f-93b0e7e34212cab7-full-play.gif#t=0.1">
    </a>
  </div>

## 👩‍💻 Author

**Mim Dey**

Computer Science student interested in frontend development, web design, and creative technology.

**GitHub:** https://github.com/mimdey

