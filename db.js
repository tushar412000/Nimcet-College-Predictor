const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'college_predictor';

// Function to retrieve college data
const getCollegeData = async () => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB successfully');

    // Select the database
    const db = client.db(dbName);

    // Get the colleges collection
    const collegesCollection = db.collection('colleges');

    // Retrieve data from MongoDB
    const data = await collegesCollection.find().toArray();

    // Close the MongoDB connection
    client.close();

    return data;
  } catch (error) {
    console.log('Error:', error);
    return [];
  }
};

module.exports = getCollegeData;
