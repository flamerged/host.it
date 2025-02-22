class CreateMissingTables < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :first_name
      t.string :last_name
      t.text :spotify_login
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :reset_password_token, unique: true

    create_table :events do |t|
      t.string :title
      t.datetime :scheduled_at
      t.string :location
      t.text :description
      t.string :spotify_playlist
      t.references :user, foreign_key: true
      t.float :latitude
      t.float :longitude
      t.timestamps
    end

    create_table :invitations do |t|
      t.references :event, foreign_key: true
      t.references :sender, foreign_key: { to_table: :users }
      t.references :receiver, foreign_key: { to_table: :users }, null: true
      t.string :receiver_email
      t.string :status
      t.timestamps
    end

    create_table :items do |t|
      t.string :name
      t.references :event, foreign_key: true
      t.references :user, foreign_key: true, null: true
      t.timestamps
    end

    create_table :chatrooms do |t|
      t.references :event, foreign_key: true
      t.timestamps
    end

    create_table :messages do |t|
      t.text :content
      t.references :chatroom, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
