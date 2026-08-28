const Task = require("../models/tasks.model")

const createTask = async (req, res) => {

    try {
        const {
            title,
            description,
            status,
            priority,
            dueDate
        } = req.body

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are mandatory"
            })
        }

        const task = await Task.create(
            {
                title,
                description,
                status,
                priority,
                dueDate
            }
        )

        return res.status(201).json({
            message: "Task created successfully",
            task
        });


    } catch (error) {
        console.log("Error found while creating new Task - ", error)
        res.status(500).json({
            message: "Error found while creating new Task! "
        })
        process.exit(-1);
    }
}

module.exports = { createTask }