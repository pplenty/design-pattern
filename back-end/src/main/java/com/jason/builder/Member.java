package com.jason.builder;

/**
 * @author : yusik
 * @date : 2018-12-21
 */
public class Member {

    private long id;
    private String name;
    private int age;

    public Member(Builder builder) {
        id = builder.id;
        name = builder.name;
        age = builder.age;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public static class Builder {

        private long id;
        private String name;
        private int age;

        public Builder(long id) {
            this.id = id;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setAge(int age) {
            this.age = age;
            return this;
        }

        public Member build() {

            return new Member(this);
        }
    }
}
