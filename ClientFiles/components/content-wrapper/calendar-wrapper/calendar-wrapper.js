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
            tasks: [],
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
        fillTasks() {
            this.tasks = [];
            for (let i = 4; i < 13; i++) {
                this.tasks.push({
                    id: i * 5,
                    name: "Tarea " + i + "/A",
                    date: moment("2019-0" + i + "-" + i * 2 + " 13:00:00"),
                    finishedOn: moment("2019-0" + i + "-" + i * 2 + " 14:00:00"),
                    description: "Tarea A en este mes",
                })
                this.tasks.push({
                    id: i * 13,
                    name: "Tarea " + i + "/B",
                    date: moment("2019-0" + i + "-" + i * 2 + " 15:00:00"),
                    finishedOn: moment("2019-0" + i + "-" + i * 2 + " 16:00:00"),
                    description: "Tarea B en este mes",
                })
                this.tasks.push({
                    id: i * 17,
                    name: "Tarea " + i + "/C",
                    date: moment("2019-0" + i + "-" + i * 2 + " 18:00:00"),
                    finishedOn: moment("2019-0" + i + "-" + i * 2 + " 19:00:00"),
                    description: "Tarea C en este mes",
                })
            }
        }
    },
    created() {
        this.busy = true;
        try {
            this.fillMonths();
            this.selectedMonth = this.months[moment().month()];
            this.fillTasks();
        } finally {
            this.busy = false;
        }
    },
    computed: {
        tasksInSelectedMonth() {
            return this.tasks.filter(t => t.date.month() === this.selectedMonth.index);
        }
    }
};
