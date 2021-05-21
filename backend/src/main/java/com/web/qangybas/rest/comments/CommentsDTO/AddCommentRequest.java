package com.web.qangybas.rest.comments.CommentsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddCommentRequest implements Serializable {
    private String name;
    private Long postId;
}
