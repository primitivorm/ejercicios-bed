/*
6. Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.

[
    {
        start: "11:00",
        end: "14:00"
    },
    {
        start: "12:00",
        end: "15:00"
    },
    {
        start: "14:30",
        end: "16:00"
    }
]

*/

const castToMinutes = (str) => {
    let hours = parseInt(str.split(':')[0]);
    let minutes = parseInt(str.split(':')[1]);
    return (hours*60)+minutes;
}

const minClassRooms = (schedules) => {
    let count = 0;
    for (let i = 0; i < schedules.length-1; i++) {
        let schedule = schedules[i];
        for (let j = i + 1; j < schedules.length; j++) {
            let nextSchedule = schedules[j];
            // checa si no hay traslape con las otras clases restantes
            if((castToMinutes(schedule.start) > castToMinutes(nextSchedule.start) 
                    && castToMinutes(schedule.start) < castToMinutes(nextSchedule.end))
                || (castToMinutes(schedule.end) > castToMinutes(nextSchedule.start) 
                    && castToMinutes(schedule.end) < castToMinutes(nextSchedule.end))) {
                count++;
            }
        }
    }
    return count;
}

export default minClassRooms;