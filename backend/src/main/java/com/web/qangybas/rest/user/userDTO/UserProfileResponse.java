package com.web.qangybas.rest.user.userDTO;

import com.web.qangybas.entities.Users;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileResponse implements Serializable {
    private Users user;
    private boolean isAuthUser;
}
