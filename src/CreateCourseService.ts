
/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
  name: string;
  duration: number; // Opcional
  educator: string;
}

class CreateCourseService {

  execute({ name, duration = 8, educator }: Course) { //  duration = 8 *default
    console.log(name, duration, educator)
  }
}

export default new CreateCourseService();