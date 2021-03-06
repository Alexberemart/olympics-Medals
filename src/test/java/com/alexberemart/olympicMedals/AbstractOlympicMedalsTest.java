package com.alexberemart.olympicMedals;


import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({
        "classpath:com/alexberemart/olympicMedals/context.xml"
})
public abstract class AbstractOlympicMedalsTest extends AbstractJUnit4SpringContextTests {
}
