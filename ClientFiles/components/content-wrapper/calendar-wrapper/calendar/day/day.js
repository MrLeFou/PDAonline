import Task from "./task";

export default {
    name: "Day",
    components: {
        Task,
    },
    props: {
        tasks: {
            type: Array,
        },
        day: {
            type: Number,
            required: true,
        },
    },
    computed: {
        dayTasks() {
            return this.tasks.filter(t => t.date.date() === this.day);
        },
    },
};