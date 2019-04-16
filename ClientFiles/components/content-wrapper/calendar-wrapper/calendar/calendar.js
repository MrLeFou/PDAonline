import Day from "./day";

export default {
    name: "Calendar",
    components: {
        Day,
    },
    props: {
        months: {
            type: Array,
            required: true,
        },
        selectedMonth: {
            type: Object,
            required: true,
        },
        selectedYear: {
            type: Number,
            required: true,
        },
        tasks: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            day: 1,
        };
    },
    computed: {
        dayTasks() {
            return this.tasks.filter(t => t.date.day() === this.day);
        },
        tasksInSelectedMonth() {
            return this.tasks.filter(t => t.date.month() === this.selectedMonth.index);
        }
    },
};
