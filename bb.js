const express = require('express');
const app = express();


app.use(express.json())

const courses = [
  { id: 1, name: 'course1' },  
  { id: 2, name: 'course2' },  
  { id: 3, name: 'course3' },  
];
 
app.get('/', (req, res) => {
  res.send(courses);
});
 
app.post('/', (req, res) => {
 //  const { error } = validateCourse(req.body); 
 //  if (error) return res.status(400).send(error.details[0].message);
 //
  const {name} = req.body
  const course = {
    id: courses.length + 1,
    name:   name
  };
  courses.push(course);
  res.send(course);
});
 
app.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');    
 
  const { error } = validateCourse(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
 
  course.name = req.body.name;
  res.send(course);
});
 
app.delete('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');
 
  const index = courses.indexOf(course);
  courses.splice(index, 1);
 
  res.send(course);
});
 
app.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');
  res.send(course);
});
 
function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
 
  return Joi.validate(course, schema);
}
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`running on port ${port}....`));