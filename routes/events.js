const express = require('express');
const multer = require('multer');
const { ObjectId } = require('mongodb');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 


module.exports = (db) => {


  // Get an event by ID
  router.get('/events', async (req, res) => {
    try {
      const { id } = req.query;
      if (id) {
        const event = await db.collection('events').findOne({ _id: ObjectId(id) });
        return res.status(200).json(event);
      } else {
        const { type, limit = 5, page = 1 } = req.query;
        const query = type === 'latest' ? {} : {}; 
        const events = await db.collection('events')
          .find(query)
          .sort({ _id: -1 })
          .skip((page - 1) * limit)
          .limit(Number(limit))
          .toArray();
        return res.status(200).json(events);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


  // Create a new event
  router.post('/events', upload.single('image'), async (req, res) => {
    try {
      const newEvent = {
        uid: req.body.uid, 
        name: req.body.name,
        tagline: req.body.tagline,
        schedule: new Date(req.body.schedule),
        description: req.body.description,
        moderator: req.body.moderator,
        category: req.body.category,
        sub_category: req.body.sub_category,
        rigor_rank: Number(req.body.rigor_rank),
        attendees: [],
        files: { image: req.file ? req.file.path : null }, 
      };
      const result = await db.collection('events').insertOne(newEvent);
      return res.status(201).json({ id: result.insertedId });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


  // Update an existing event
  router.put('/events/:id', upload.single('image'), async (req, res) => {
        try {
          const { id } = req.params;
          const updatedEvent = {
            uid: req.body.uid,
            name: req.body.name,
            tagline: req.body.tagline,
            schedule: new Date(req.body.schedule),
            description: req.body.description,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: Number(req.body.rigor_rank),
            attendees: [],
            files: { image: req.file ? req.file.path : null },
          };
          await db.collection('events').updateOne({ _id: new ObjectId(id) }, { $set: updatedEvent });
          return res.status(200).json({ message: 'Event updated successfully' });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
      });
    

  // Delete an event
  router.delete('/events/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.collection('events').deleteOne({ _id: ObjectId(id) });
      return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  return router;
};
