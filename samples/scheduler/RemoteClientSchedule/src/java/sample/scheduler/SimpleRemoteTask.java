package sample.scheduler;

import jeus.schedule.client.*;
import jeus.schedule.*;
import jeus.util.*;

import java.util.Date;

public class SimpleRemoteTask implements ScheduleListener {
    private int count;

    // no-arg constructor is required if classname is used for task registration
    public SimpleRemoteTask() {
    }

    public void onTime() {
        count++;
        System.out.println("##### SimpleRemoteTask" + " is waked "
                + count + " times on " + new Date());
    }
}
