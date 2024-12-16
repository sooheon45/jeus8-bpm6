package sample.scheduler;

import jeus.schedule.client.*;
import jeus.schedule.*;
import jeus.util.*;

import java.util.Date;

public class StandaloneClientSchedule {
    public static void main(String args[]) {
        try {
            Scheduler scheduler = SchedulerFactory.getDefaultScheduler();
            Date firstTime = new Date(System.currentTimeMillis() + 1000);
            Date endTime = new Date(firstTime.getTime() + 8000);
            ScheduleController schController = scheduler.registerSchedule(
                        new SimpleTask("StandaloneClientScheduleTask"),
                        firstTime, 1000, endTime, Scheduler.UNLIMITED, false);

            int msec = 10000;
            System.out.println("Sleeping " + msec + "ms ...");
            Thread.sleep(msec);

            schController.cancel();

            System.out.println("-- Scheduling done");
        } catch (Exception re) {
            re.printStackTrace();
        }
    }
}
