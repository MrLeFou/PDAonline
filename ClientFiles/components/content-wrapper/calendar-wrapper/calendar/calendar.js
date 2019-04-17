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

        };
    },
    methods: {
        dayTasks(day) {
            return this.tasks.filter(t => t.date.day() === day);
        },
    },
    created() {

    },
};
