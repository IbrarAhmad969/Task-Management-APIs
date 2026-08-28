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
const getTasks = async (req, res) => {
    try {

        const tasks = await Task.find();
        return res.status(200).json({
            tasks,
            message: "All Tasks "
        })


    } catch (error) {
        console.log("Failed to load Tasks ", error)
        res.status(400).json({
            message: "Unable to get the Tasks"

        })
    }
}
const findTask = async (req, res) => {
    const id = req.params.id

    try {
        const doc_id = await Task.findById(id);
        if (doc_id === null) {
            return res.status(404).json({
                message: "This id is not found!"
            })
        }
        return res.status(200).json({
            message: "This ID is found! ",
            doc_id
        })

    } catch (error) {
        console.log("We have found an error ", error)
        return res.status(400).json({
            message: "We did not found that Id"
        })
    }
}
const updateTask = async (req, res) => {
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
        console.error("Error updating task:", error);

        return res.status(400).json({
            message: "Unable to update task",
            error: error.message
        });
    }
};
const deleteTask = async (req, res) => {
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
        console.error("Error deleting task:", error);

        return res.status(500).json({
            message: "Unable to delete task"
        });
    }
};

module.exports = { createTask, getTasks, findTask, updateTask, deleteTask }