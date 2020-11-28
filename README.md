# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Chat-Space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- belongs_to :chat_group_member

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
### Association
- belongs_to :chat_group_member

## chat_group_membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups
- has_many :messages

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|chat_group_member_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :chat_group_member