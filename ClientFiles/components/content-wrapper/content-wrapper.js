import moment from "moment";

import CalendarWrapper from "./calendar-wrapper"

export default {
    name: 'content-wrapper',
    components: {
        CalendarWrapper
    },
    data() {
        return {
            selectedYear: null,
            years: []
        };
    },
    created() {
        this.selectedYear = moment().year();
        this.fillYears();
    },
    methods: {
        fillYears() {
            let yearRange = 5;
            for (let i = -yearRange; i < yearRange; i++) {
                this.years.push(this.selectedYear + i);
            }
        }
    },
    computed: {
        
    },
};
