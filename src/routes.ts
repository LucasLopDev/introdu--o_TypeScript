import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    educator: "Dani",
    name: "NodeJS",
    duration: 12
  });

  return response.send();
}