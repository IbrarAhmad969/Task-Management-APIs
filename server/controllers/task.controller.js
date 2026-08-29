const Task = require("../models/tasks.model")

const createTask = async (req, res, next) => {

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
        next(error)
    }
}
const getTasks = async (req, res, next) => {
    try {

        const tasks = await Task.find();
        return res.status(200).json({
            tasks,
            message: "All Tasks "
        })


    } catch (error) {
        next(error)
    }
}
const findTask = async (req, res, next) => {
    const id = req.params.id

    try {
        const task = await Task.findById(id);
        if (task === null) {
            return res.status(404).json({
                message: "This id is not found!"
            })
        }
        return res.status(200).json({
            message: "This ID is found! ",
            task
        })

    } catch (error) {
        next(error)
    }
}
const updateTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, // send us back the new version/updated, not the older one. 
                runValidators: true // use my validation, defined by the schema. 
            }
        );

        if (task === null) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task updated successfully",
            task
        });

    } catch (error) {
        next(error)
    }
};
const deleteTask = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);

        if (deletedTask === null) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        return res.status(200).json({
            message: "Task deleted successfully",
            task: deletedTask
        });

    } catch (error) {
        next(error)
    }
};

module.exports = { createTask, getTasks, findTask, updateTask, deleteTask }