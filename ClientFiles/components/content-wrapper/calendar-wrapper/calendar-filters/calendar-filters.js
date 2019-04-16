export default {
    name: "CalendarFilters",
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
        }
    },
    computed: {
        selectedMonthModel: {
            get() {
                return this.months.find(m => m.index === this.selectedMonth.index);
            },
            set(value) {
                this.$emit("month-changed", value)
            }
        }
    },
};
