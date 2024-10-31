# Nudge API Documentation

This documentation provides details about the Nudge API, which allows users to create nudges for events or articles.

## 1. Object Data Model for Nudge

### Nudge Object Model

```json
{
  "id": "string",                // Unique identifier for the nudge
  "event_id": "string",          // Identifier for the related event or article
  "title": "string",              // Title of the nudge
  "description": "string",        // Description of the nudge
  "image_url": "string",          // URL of the uploaded cover image
  "scheduled_time": "datetime",   // Time when the nudge is scheduled to be sent
  "icon": "string",               // Icon to represent the nudge
  "invitation_text": "string",    // One line invitation text
  "created_at": "datetime",       // Timestamp of when the nudge was created
  "updated_at": "datetime"        // Timestamp of the last update
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
  ...
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

## How to Use

1. Copy the entire Markdown code from the code block above.
2. Create a new file named `README.md` in your project directory.
3. Paste the code into the `README.md` file.
4. Save the file.

Now you have a complete and well-structured README for your Nudge API project in a single format!
