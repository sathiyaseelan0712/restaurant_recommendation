const Details = require('../models/restaraunt');
const User = require('../models/user');
module.exports.filterrestaraunt = async (req, res) => {
    console.log("request body is", req.body);
    try {
        const { location, rating, cuisines } = req.body;
        const query = {};
        if (location) {
            query.location = location;
        }

        if (rating?.length > 0) {
            if (rating == 3) {
                query.rating = { $gte: 3, $lte: 5 };
            } else {
                query.rating = { $gte: 4, $lte: 5 };
            }
        }

        if (cuisines?.length > 0) {
            query.cuisines = { $in: cuisines };
        }
        if (menu?.length > 0) {
            query.menu = { $in: menu };
        }

        const restaurants = await Details.find(query);
        if (restaurants.length > 0) {
            res.json({ success: true, data: restaurants });
        } else {
            res.json({ success: false, message: "No such data found!" });
        }
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

module.exports.getAllrestaraunt = async (req, res) => {
    try {
        const todos = await Details.find({});
        res.status(200).send(todos);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports.getrestarauntById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Details.findById(id);
        if (todo) {
            res.status(200).send({ todo })
        }
        else {
            res.status(404).send({ msg: "Details not found" });
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.addrestaraunt = async (req, res) => {
    try {
        const todo = new Details(req.body);
        await todo.save();
        res.status(200).send({ msg: "Details added successfully" });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports.adduser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(200).send({ msg: "User added successfully" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.getAlluser = async (req, res) => {
    const { username, email, password } = req.body; 
    try {
        let user;
        if (username) {
            user = await User.findOne({ username });
        } else if (email) {
            user = await User.findOne({ email });
        } else {
            return res.status(400).send({ message: "Username or email is required" });
        }

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        res.status(200).send(user);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
};


module.exports.updaterestaraunt = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Details.findByIdAndUpdate(id, req.body);

        if (todo) {
            res.status(200).send({ todo });
        }
        else {
            res.status(404).send({ msg: "Details not found" });
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.deleterestaraunt = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Details.findByIdAndDelete(id, req.body);
        if (todo) {
            res.status(200).send({ msg: "Details deleted successfully" });
        }
        else {
            res.status(404).send({ msg: "Details not found" });
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }

}