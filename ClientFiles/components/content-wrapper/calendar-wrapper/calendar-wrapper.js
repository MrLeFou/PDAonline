import moment from 'moment';
//import axios from 'axios';

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
        selectedYear() {
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
        fillMonths() {
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
            for (let i = 0; i < 12; i++) {
                for (let j = 1; j < 4; j ++) {
                    this.tasks.push({
                        id: i * j,
                        name: 'T: ' + i * j,
                        date: moment().month(i).add(j, 'days'),
                        finishedOn: moment().month(i),
                        description: `Mes ${i+1}, Offset ${j}`,
                    })
                }
            }
            //this.tasks = axios.get('http://localhost:58484/GetDuties').
            //const response = axios.get('http://localhost:58484/GetDuties')
            //this.tasks = response.data;
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
