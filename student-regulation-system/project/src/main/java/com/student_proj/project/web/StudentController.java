package com.student_proj.project.web;

import com.student_proj.project.models.Student;
import com.student_proj.project.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    public void createStudent(@RequestBody Student student){
        studentRepository.insert(student);
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/delete/{id}")
    public void deleteStudent(@PathVariable String id){
        studentRepository.deleteById(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/list")
    public List<Student> listStudent(){
        return studentRepository.findAll();
    }
}
