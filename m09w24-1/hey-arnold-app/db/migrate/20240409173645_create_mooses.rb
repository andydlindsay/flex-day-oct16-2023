class CreateMooses < ActiveRecord::Migration[6.1]
  def change
    create_table :mooses do |t|

      t.timestamps
    end
  end
end
