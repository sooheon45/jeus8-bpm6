package rest;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.ws.rs.core.Application;

public class MyApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new LinkedHashSet<Class<?>>();
        classes.add(MyResource.class);

        return classes;
    }

}
