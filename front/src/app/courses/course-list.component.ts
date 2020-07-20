import { Component, OnInit } from '@angular/core'
import { CourseService } from './course.service'

import {Course} from './course'

@Component({
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

    _courses:Course[] = []

    filteredCourses:Course[] = []
    _filterBy:string

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
       this.retriveAll()
    }

    retriveAll():void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses
            },
            error: err => console.log(err)
        })
    }

    deleteById(courseId:number):void {
        this.courseService.deleteById(courseId).subscribe({
            next: course => {
                    console.log('Delete: ', course)
                    this.retriveAll()
                },
            error: err => console.error(err)

        })
    }

    set filter(value:string) {
        this._filterBy = value

        this.filteredCourses = this._courses.filter((course:Course) => {
           return course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
        })
    }   

    get filter() {
        return this._filterBy
    }
}