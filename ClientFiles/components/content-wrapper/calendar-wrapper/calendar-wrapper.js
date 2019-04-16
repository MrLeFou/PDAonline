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
            for (let i = 1; i < 13; i++) {
                for (let j = 1; j < 4; j += 2) {
                    console.log(i);
                    console.log(j);
                    console.log(i * j);
                    console.log(moment().month(i).day(i * j));
                    this.tasks.push({
                        id: i * j * 7,
                        name: "Tarea " + i * j * 7,
                        date: moment().month(i).day(i * j),
                        finishedOn: moment().month(i).day((i * 2) + 1),
                        description: "Tarea A en este mes",
                    })
                }
            }
        },
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
