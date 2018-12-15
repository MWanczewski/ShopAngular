package sdaproject.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class RoleEntity extends AbstractEntity{
    @Column(name = "role")
    private String roleName;

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public RoleEntity() {
    }

    public RoleEntity(String roleName) {
        this.roleName = roleName;
    }
}
