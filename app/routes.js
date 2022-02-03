module.exports = function(app, passport, db, ObjectId) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });


  // PROFILE SECTION =========================
  app.get('/profile', isLoggedIn, function(req, res) {
    db.collection('drawings').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile.ejs', {
        user: req.user,
        drawings: result
      })
    })
  });

  app.get('/draw', isLoggedIn, function(req, res) {
    db.collection('drawings').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('draw.ejs', {
        user: req.user,
        drawings: result
      })
    })
  });

  app.get('/editdraw', isLoggedIn, function(req, res) {
    db.collection('drawings').find().toArray((err, result) => {
      if (err) return console.log(err)
      console.log(result);
      res.render('editdraw.ejs', {
        user: req.user,
        drawings: result
      })
    })
  });

  app.get('/newsfeed', isLoggedIn, function(req, res) {
    db.collection('drawings').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('newsfeed.ejs', {
        user: req.user,
        drawings: result
      })
    })
  });




  // LOGOUT ==============================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // message board routes ===============================================================
  //
  // app.post('/messages', (req, res) => {
  //   db.collection('messages').save({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
  //     if (err) return console.log(err)
  //     console.log('saved to database')
  //     res.redirect('/profile')
  //   })
  // })

  app.post('/pic', isLoggedIn, (req, res) => {
    db.collection('drawings').save({
      user: req.user.local.email,
      png: req.body.url,
      userName: req.user.userName,
      title: req.body.title,
      comments:[]
    }, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/profile')
    })
  })


  // app.get('/pic/:pic_id', (req, res) => {
  // var pic_id = ObjectId(req.param.pic_id);
  // console.log('this is pic id', pic_id);

  // const {objectId} = require('mongodb');
  //
  // app.get('/pic', (req, res) => {
  //   console.log("PICID: ", req.query.pic_id);
  //   var pic_id = objectId(req.query.pic_id);
  //   db.collection('drawings').find({"_id": pic_id}).toArray((err, result) => {
  //     if (err) return console.log(err)
  //     console.log("pics: ", result);
  //     res.render('draw.ejs',{
  //       user : req.user,
  //       drawings: result
  //     })//findOne(with pic_id) then render('draw.ejs', drawings)
  //   })
  // });


  ObjectID = require('mongodb').ObjectID;
  app.get('/pic', (req, res) => {
    console.log("PICID: ", req.query.pic_id);
    var pic_id = ObjectID(req.query.pic_id);
    db.collection('drawings').find({
      "_id": pic_id
    }).toArray((err, result) => {
      if (err) return console.log(err)
      console.log("pics: ", result);
      res.render('draw.ejs', {
        user: req.user,
        drawings: result
      }) //findOne(with pic_id) then render('draw.ejs', drawings)
    })
  });


  //====================EDIT DRAW SECTION============================

  app.put('/editdraw', (req, res) => {
    console.log("uri: ", req.body.url, "id: ", req.body.id, "title: ", req.body.title);
    var pic_id = ObjectID(req.body.id)
    db.collection('drawings')
      .findOneAndUpdate({
        _id: pic_id
      }, {
        $set: {
          png: req.body.url,

          title: req.body.title
        }
      }, {
        sort: {
          _id: -1
        },
        upsert: true
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
  })

  // app.put('/updateComment', (req, res) => {
  //    db.collection('drawings')
  //      .findOneAndUpdate({
  //        png: req.body.png
  //      }, {
  //        $addToSet: {
  //          comments: [req.body.currentUser, req.body.comment]
  //        }
  //      }, {
  //        sort: {
  //          _id: -1
  //        },
  //        upsert: true
  //      }, (err, result) => {
  //        if (err) return res.send(err)
  //        res.send(result)
  //      })
  //  })

  app.delete('/drawings', (req, res) => {
    db.collection('drawings').findOneAndDelete({
        png: req.body.png
      },
      (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
  })

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function(req, res) {
    res.render('login.ejs', {
      message: req.flash('loginMessage')
    });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function(req, res) {
    res.render('signup.ejs', {
      message: req.flash('signupMessage')
    });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // =============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', isLoggedIn, function(req, res) {
    var user = req.user;
    user.local.email = undefined;
    user.local.password = undefined;
    user.save(function(err) {
      res.redirect('/profile');
    });
  });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
