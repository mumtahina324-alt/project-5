import { Check, Edit2, Plus, Search, Trash2, X } from "lucide-react";
import { useState } from "react";

export default function TaskSection() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Daily Revision",
      description: "Revise what you learned today and take short notes",
      completed: false,
    },
  ]);

  const [isAddingTask, setIsAddingTask] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [data, setData] = useState({ title: "", description: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, { ...data, id: Date.now(), completed: false }]);
    setData({ title: "", description: "" });
    setIsAddingTask(false);
  };

  const handleEditTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, ...data } : t)));
    setEditingTaskId(null);
    setData({ title: "", description: "" });
  };

  const handleStartEdit = (task) => {
    setData(task);
    setEditingTaskId(task.id);
    setIsAddingTask(true);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-zinc-900 to-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold  bg-purple-500 bg-clip-text text-transparent">
            To Do List
          </h1>
        </div>

        {/* Search + Add */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-700 rounded-lg text-gray-200 focus:border-purple-500 outline-none"
              placeholder="Search task..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            onClick={() => {
              setIsAddingTask(true);
              setEditingTaskId(null);
            }}
            className="px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition"
          >
            <Plus size={18} /> Add
          </button>
        </div>

        {/* Add / Edit Form */}
        {(isAddingTask || editingTaskId) && (
          <div className="backdrop-blur-xl bg-white/5 border border-purple-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {editingTaskId ? "Edit Task" : "New Task"}
            </h3>

            <div className="space-y-4">
              <input
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-gray-200"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <textarea
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-gray-200 resize-none"
                placeholder="Description"
                rows="3"
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    editingTaskId
                      ? handleEditTask(editingTaskId)
                      : handleAddTask()
                  }
                  className="flex-1 bg-green-500 text-black py-2 rounded-lg flex justify-center gap-2"
                >
                  <Check size={18} /> Save
                </button>
                <button
                  onClick={() => setIsAddingTask(false)}
                  className="flex-1 bg-red-500 text-black py-2 rounded-lg flex justify-center gap-2"
                >
                  <X size={18} /> Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-purple-500/50 transition"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-100">
                  {task.title}
                </h3>
                <p className="text-gray-400">{task.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleStartEdit(task)}
                  className="p-2 rounded-lg text-cyan-400 hover:bg-cyan-400/10"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="p-2 rounded-lg text-red-400 hover:bg-red-400/10"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
