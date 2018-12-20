package com.jason.builder;

/**
 * @author : yusik
 * @date : 2018-12-21
 */
public class BuilderTest {
    public static void main(String[] args) {

        Member.Builder builder = new Member.Builder(1);


        Member member = builder
                .setName("kohyusik")
                .setAge(28)
                .build();

        System.out.println(member);

    }
}
