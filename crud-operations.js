const MyModel = mongoose.model('MyModel', new mongoose.Schema({ name: String }));

// 创建文档
const newItem = new MyModel({ name: 'Test Item' });
newItem.save().then(item => console.log('Item saved:', item));

// 读取文档
MyModel.find().then(items => console.log('Items:', items));

// 更新文档
MyModel.updateOne({ name: 'Test Item' }, { name: 'Updated Item' })
  .then(result => console.log('Update result:', result));

// 删除文档
MyModel.deleteOne({ name: 'Updated Item' })
  .then(result => console.log('Delete result:', result));
