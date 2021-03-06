package sdaproject.server.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import sdaproject.server.converter.UserConverter;
import sdaproject.server.dto.UserDTO;
import sdaproject.server.entity.UserEntity;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Component
public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final ObjectMapper objectMapper;
    private final UserConverter userConverter;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
                                        throws IOException, ServletException {
        clearAuthenticationAttributes(request);
        UserDTO user = userConverter.convertToDto((UserEntity) authentication.getPrincipal());
        String loggedUser = objectMapper.writeValueAsString(user);
        response.setContentType("application.json");
        response.getWriter().write(loggedUser);
    }

    public AuthenticationSuccessHandler(ObjectMapper objectMapper, UserConverter userConverter) {
        this.objectMapper = objectMapper;
        this.userConverter = userConverter;

    }

}


