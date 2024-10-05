# API Chaining Dashboard

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm run dev`.

## Approach

This app demonstrates API chaining, where data from one API is passed as input to another. The dashboard fetches user data, creates a new post, and retrieves comments for that post.

### Core Features:

- API chaining (GET and POST requests)
- Data transformation
- Error handling and loading states

### Assumptions

- The first user is used for the post creation.
- All requests are sequential.

### Known Issues

- UI can be improved for better user experience.
