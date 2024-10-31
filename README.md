# Task 1 

# Event Management API

This is an Express-based API for managing events. It allows users to create, read, update, and delete events. The API supports image uploads for event cover images.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akashchoudhary436/crud-api-nodejs.git
   cd crud-api-nodejs
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the server:

```bash
npm start
```

The server will be running on http://localhost:3000.

## API Endpoints

1. Get Events
   - Endpoint: GET /api/v3/app/events
   - Query Parameters:
     - `id` : Event ID to retrieve a specific event.
     - `type` : Type of events to retrieve (e.g., latest).
     - `limit` : Number of events to retrieve per page (default: 5).
     - `page` : Page number for pagination (default: 1).
   - Example Request:
     ```plaintext
     GET /api/v3/app/events?id=<event_id>
     ```

2. Create Event
   - Endpoint: POST /api/v3/app/events
   - Body Parameters:
     - `uid`: User ID.
     - `name`: Name of the event.
     - `tagline`: Tagline of the event.
     - `schedule`: Schedule date and time (ISO format).
     - `description`: Description of the event.
     - `moderator`: Moderator of the event.
     - `category`: Category of the event.
     - `sub_category`: Sub-category of the event.
     - `rigor_rank`: Rigor rank of the event (number).
     - `image`: Image file (for upload).
   - Example Request:
     ```plaintext
     POST /api/v3/app/events
     ```

3. Update Event
   - Endpoint: PUT /api/v3/app/events/:id
   - URL Parameters:
     - `id`: Event ID to update.
   - Body Parameters: Same as Create Event.
   - Example Request:
     ```plaintext
     PUT /api/v3/app/events/<event_id>
     ```

4. Delete Event
   - Endpoint: DELETE /api/v3/app/events/:id
   - URL Parameters:
     - `id`: Event ID to delete.
   - Example Request:
     ```plaintext
     DELETE /api/v3/app/events/<event_id>
     ```

## Testing with Postman

1. Open Postman and create a new request.

2. To Get Events:
   - Set the request method to GET.
   - Enter the URL: http://localhost:3000/api/v3/app/events.

3. To Create an Event:
   - Set the request method to POST.
   - Enter the URL: http://localhost:3000/api/v3/app/events.
   - In the Body tab, select form-data.
   - Add key-value pairs for all parameters, including a key for the image file (with type set to File).

4. To Update an Event:
   - Set the request method to PUT.
   - Enter the URL: http://localhost:3000/api/v3/app/events/<event_id>.
   - Add the same body parameters as for creating an event.

5. To Delete an Event:
   - Set the request method to DELETE.
   - Enter the URL: http://localhost:3000/api/v3/app/events/<event_id>.
   - Click Send to execute the request.



# Task 2 

# Nudge API Documentation

This documentation provides details about the Nudge API, which allows users to create nudges for events or articles.

## 1. Object Data Model for Nudge

### Nudge Object Model

```json
{
  "id": "string",               
  "event_id": "string",         
  "title": "string",             
  "description": "string",      
  "image_url": "string",        
  "scheduled_time": "datetime",   
  "icon": "string",             
  "invitation_text": "string",  
  "created_at": "datetime",     
  "updated_at": "datetime"      
}
```

## 2. API Structure Documentation

### Base URL

```
https://api.example.com/v1
```

### API Endpoints

| Method | Endpoint       | Description                      |
|--------|----------------|----------------------------------|
| POST   | /nudges        | Create a new nudge.              |
| GET    | /nudges        | Retrieve a list of nudges.       |
| GET    | /nudges/{id}   | Retrieve details of a specific nudge. |
| PUT    | /nudges/{id}   | Update an existing nudge.        |
| DELETE | /nudges/{id}   | Delete a specific nudge.         |

### Payload Structures

#### 1. Create Nudge (POST /nudges)

**Request Payload:**

```json
{
  "event_id": "string",
  "title": "string",
  "description": "string",
  "image_url": "string",
  "scheduled_time": "datetime",
  "icon": "string",
  "invitation_text": "string"
}
```

**Response:**

```

```json
{
  "id": "string",
  "message": "Nudge created successfully."
}
```

#### 2. Retrieve All Nudges (GET /nudges)

**Response:**

```json
[
  {
    "id": "string",
    "event_id": "string",
    "title": "string",
    "description": "string",
    "image_url": "string",
    "scheduled_time": "datetime",
    "icon": "string",
    "invitation_text": "string",
    "created_at": "datetime",
    "updated_at": "datetime"
  },
]
```

#### 3. Retrieve Specific Nudge (GET /nudges/{id})

**Response:**

```json
{
  "id": "string",
  "event_id": "string",
  "title": "string",
  "description": "string",
  "image_url": "string",
  "scheduled_time": "datetime",
  "icon": "string",
  "invitation_text": "string",
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

#### 4. Update Nudge (PUT /nudges/{id})

**Request Payload:**

```json
{
  "title": "string",
  "description": "string",
  "image_url": "string",
  "scheduled_time": "datetime",
  "icon": "string",
  "invitation_text": "string"
}
```

**Response:**

```json
{
  "message": "Nudge updated successfully."
}
```

#### 5. Delete Nudge (DELETE /nudges/{id})

**Response:**

```json
{
  "message": "Nudge deleted successfully."
}
```

## 3. Documentation for CRUD Functionalities

### Create Nudge

**Endpoint:** POST /nudges

**Description:** This endpoint allows users to create a new nudge for an event or article. Users must provide the event ID, title, description, image URL, scheduled time, icon, and invitation text.

**Success Response:** Returns the ID of the created nudge and a success message.

### Read Nudges

**Endpoint:** GET /nudges

**Description:** This endpoint retrieves a list of all nudges created by the user.

**Success Response:** Returns an array of nudge objects.

### Read Specific Nudge

**Endpoint:** GET /nudges/{id}

**Description:** This endpoint retrieves the details of a specific nudge identified by its ID.

**Success Response:** Returns the nudge object.

### Update Nudge

**Endpoint:** PUT /nudges/{id}

**Description:** This endpoint allows users to update an existing nudge. Users must provide updated information for the title, description, image URL, scheduled time, icon, and invitation text.

**Success Response:** Returns a success message confirming the update.

### Delete Nudge

**Endpoint:** DELETE /nudges/{id}

**Description:** This endpoint allows users to delete a specific nudge identified by its ID.

**Success Response:** Returns a success message confirming the deletion.
