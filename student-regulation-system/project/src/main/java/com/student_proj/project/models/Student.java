package com.student_proj.project.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
@Data @NoArgsConstructor @AllArgsConstructor @ToString

public class Student {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private int marks;
    private String subject;
    private int semester;
    
}
