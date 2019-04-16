import moment from 'moment';

import Filters from "./calendar-filters"
import Calendar from "./calendar"

export default {
    name: "calendar-wrapper",
    components: {
        Filters,
        Calendar,
    },
    props: {
        selectedYear: {
            type: Number,
        },
    },
    watch: {
        selectedYear(){
            this.fillMonths();
        }
    },
    data() {
        return {
            selectedMonth: null,
            months: [],
        };
    },
    methods: {
        fillMonths(){
            this.months = [];
            
            for (let i = 0; i < 12; i++) {
                let month = moment().month(i).year(this.selectedYear);
    
                this.months.push({
                    displayName: month.format("MMMM"),
                    index: i,
                    days: month.daysInMonth(),
                })
            }
        },
        onMonthChanged(value) {
            this.selectedMonth = value;
        },
    },
    created() {
        this.busy = true;
        try {
            this.fillMonths();
            this.selectedMonth = this.months[0];
        } finally {
            this.busy = false;
        }
    },
};
