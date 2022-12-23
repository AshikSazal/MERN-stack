const { uuid } = require('uuidv4');

const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      location: {
          lat: 40.7484405,
          lng: -73.9878584,
        },
    address: "20 W 34th St, New York, NY 10001",
      creator: "u1",
    },
  ];

const getPlaceById = (req, res, next)=>{
    const placeId = req.params.pid; // { pid: 'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    })
    // if(!place){
    //   return res.status(400).json({message: 'Could not find a place for the provided id.'});
    // }
    if(!place){
      throw new HttpError('Could not find place for the provided id', 404);
    }
    res.json({place}); // {place }=> {place:place}
}

const getPlaceByUserId = (req, res, next)=>{
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p =>{
        return p.creator === userId;
    })
    // if(!place){
    //   return res.status(400).json({message: 'Could not find a place for the user id.'});
    // }
    if(!place){
      return next(new HttpError('Could not find place for the user id', 404));
    }

    res.json({place});
}

const createPlace = (req, res, next)=>{
    const { title, description, coordinates, address, creator } = req.body;
    // const title = req.body.title;
    const createdPlace = {
        id: uuid(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };
    DUMMY_PLACES.push(createdPlace);

    res.status(201).json({place: createdPlace});
}

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;

exports.createPlace = createPlace;