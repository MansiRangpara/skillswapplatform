import React, { useState } from 'react';
import { ArrowLeft, Upload, Plus, Trash2, Eye, Save, Send, Image, Video, FileText, Clock, DollarSign, Users, Tag, BookOpen, ChevronDown, ChevronRight, GripVertical } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  duration: string;
  preview: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  expanded: boolean;
}

interface CourseData {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  level: string;
  language: string;
  price: string;
  thumbnail: string;
  requirements: string[];
  objectives: string[];
  modules: Module[];
}

const CreateCourse = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState<CourseData>({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    level: 'beginner',
    language: 'english',
    price: '',
    thumbnail: '',
    requirements: [''],
    objectives: [''],
    modules: []
  });

  const steps = [
    { id: 1, title: 'Basic Info', icon: BookOpen },
    { id: 2, title: 'Content', icon: Video },
    { id: 3, title: 'Pricing & Settings', icon: DollarSign },
    { id: 4, title: 'Review & Publish', icon: Send }
  ];

  const categories = [
    'Programming', 'Design', 'Business', 'Marketing', 
    'Photography', 'Music', 'Health & Fitness', 'Language',
    'Personal Development', 'Teaching & Academics'
  ];

  const levels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'all', label: 'All Levels' }
  ];

  const updateField = (field: keyof CourseData, value: any) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };

  const updateArrayField = (field: 'requirements' | 'objectives', index: number, value: string) => {
    const newArray = [...courseData[field]];
    newArray[index] = value;
    updateField(field, newArray);
  };

  const addArrayField = (field: 'requirements' | 'objectives') => {
    updateField(field, [...courseData[field], '']);
  };

  const removeArrayField = (field: 'requirements' | 'objectives', index: number) => {
    const newArray = courseData[field].filter((_, i) => i !== index);
    updateField(field, newArray.length === 0 ? [''] : newArray);
  };

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: '',
      lessons: [],
      expanded: true
    };
    updateField('modules', [...courseData.modules, newModule]);
  };

  const updateModule = (moduleId: string, field: keyof Module, value: any) => {
    const newModules = courseData.modules.map(module =>
      module.id === moduleId ? { ...module, [field]: value } : module
    );
    updateField('modules', newModules);
  };

  const deleteModule = (moduleId: string) => {
    const newModules = courseData.modules.filter(module => module.id !== moduleId);
    updateField('modules', newModules);
  };

  const addLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: Date.now().toString(),
      title: '',
      type: 'video',
      duration: '',
      preview: false
    };
    
    const newModules = courseData.modules.map(module =>
      module.id === moduleId 
        ? { ...module, lessons: [...module.lessons, newLesson] }
        : module
    );
    updateField('modules', newModules);
  };

  const updateLesson = (moduleId: string, lessonId: string, field: keyof Lesson, value: any) => {
    const newModules = courseData.modules.map(module =>
      module.id === moduleId 
        ? {
            ...module,
            lessons: module.lessons.map(lesson =>
              lesson.id === lessonId ? { ...lesson, [field]: value } : lesson
            )
          }
        : module
    );
    updateField('modules', newModules);
  };

  const deleteLesson = (moduleId: string, lessonId: string) => {
    const newModules = courseData.modules.map(module =>
      module.id === moduleId 
        ? {
            ...module,
            lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
          }
        : module
    );
    updateField('modules', newModules);
  };
  const handleSaveDraft = async () => {
  try {
    const formData = new FormData();
    formData.append("title", courseData.title || "");
    formData.append("subtitle", courseData.subtitle || "");
    formData.append("description", courseData.description || "");
    formData.append("category", courseData.category || "");
    formData.append("level", courseData.level || "");
    formData.append("language", courseData.language || "");
    formData.append("price", courseData.price || "");
    formData.append("status", "draft");

    if (imageFile) {
      formData.append("image", imageFile); // must match multer field name
    }

    formData.append("requirements", JSON.stringify(courseData.requirements));
    formData.append("objectives", JSON.stringify(courseData.objectives));
    formData.append("modules", JSON.stringify(courseData.modules));

    const res = await fetch("http://localhost:5000/api/courses/create", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to save draft. Server says: ${text}`);
    }

    alert("✅ Draft saved successfully!");
  } catch (err) {
    console.error("❌ Error saving draft:", err);
    alert("Error saving draft. Check console for details.");
  }
};


const [imageFile, setImageFile] = useState<File | null>(null);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    setImageFile(e.target.files[0]);
  }
};


const handleSubmit = async (isDraft = false) => {
  try {
    const payload = {
      title: courseTitle,
      description: courseDescription,
      content: courseContent,
      status: isDraft ? "draft" : "published", // Status field for database
    };

    const response = await fetch("/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Course saved:", data);

    alert(isDraft ? "Draft saved!" : "Course published!");
  } catch (err) {
    console.error("Error saving course:", err);
    alert("Failed to save course.");
  }
};


  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStep1 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Course Information</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title *</label>
            <input
              type="text"
              value={courseData.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="e.g., Complete Web Development Bootcamp"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Subtitle</label>
            <input
              type="text"
              value={courseData.subtitle}
              onChange={(e) => updateField('subtitle', e.target.value)}
              placeholder="e.g., Learn HTML, CSS, JavaScript, React, and Node.js"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Description *</label>
            <textarea
              value={courseData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Describe what students will learn in this course..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                value={courseData.category}
                onChange={(e) => updateField('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
              <select
                value={courseData.level}
                onChange={(e) => updateField('level', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={courseData.language}
                onChange={(e) => updateField('language', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload course thumbnail</p>
              <p className="text-sm text-gray-500">Recommended: 1280x720px, JPG or PNG</p>
            <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
  />

            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Course Content</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
            {courseData.requirements.map((req, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => updateArrayField('requirements', index, e.target.value)}
                  placeholder="What students need to know before taking this course"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {courseData.requirements.length > 1 && (
                  <button
                    onClick={() => removeArrayField('requirements', index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addArrayField('requirements')}
              className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4 inline mr-1" />
              Add Requirement
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Learning Objectives</label>
            {courseData.objectives.map((obj, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={obj}
                  onChange={(e) => updateArrayField('objectives', index, e.target.value)}
                  placeholder="What students will learn from this course"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {courseData.objectives.length > 1 && (
                  <button
                    onClick={() => removeArrayField('objectives', index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addArrayField('objectives')}
              className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4 inline mr-1" />
              Add Objective
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-900 mb-4">Curriculum</h4>
        <div className="space-y-4">
          {courseData.modules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-4 bg-gray-50">
                <div className="flex items-center space-x-3 flex-1">
                  <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                  <button
                    onClick={() => updateModule(module.id, 'expanded', !module.expanded)}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    {module.expanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="text"
                    value={module.title}
                    onChange={(e) => updateModule(module.id, 'title', e.target.value)}
                    placeholder="Module title"
                    className="flex-1 bg-transparent border-none focus:outline-none font-medium"
                  />
                </div>
                <button
                  onClick={() => deleteModule(module.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {module.expanded && (
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => updateLesson(module.id, lesson.id, 'title', e.target.value)}
                            placeholder="Lesson title"
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <select
                            value={lesson.type}
                            onChange={(e) => updateLesson(module.id, lesson.id, 'type', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="video">Video</option>
                            <option value="text">Text</option>
                            <option value="quiz">Quiz</option>
                          </select>
                          <input
                            type="text"
                            value={lesson.duration}
                            onChange={(e) => updateLesson(module.id, lesson.id, 'duration', e.target.value)}
                            placeholder="Duration (e.g., 5:30)"
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <div className="flex items-center space-x-2">
                            <label className="flex items-center space-x-1 text-sm">
                              <input
                                type="checkbox"
                                checked={lesson.preview}
                                onChange={(e) => updateLesson(module.id, lesson.id, 'preview', e.target.checked)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span>Preview</span>
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteLesson(module.id, lesson.id)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addLesson(module.id)}
                      className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <Plus className="w-4 h-4 inline mr-2" />
                      Add Lesson
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <button
            onClick={addModule}
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5 inline mr-2" />
            Add Module
          </button>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Pricing & Settings</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Price (USD) *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="number"
                value={courseData.price}
                onChange={(e) => updateField('price', e.target.value)}
                placeholder="99"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Set to $0 for a free course
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Publishing Options</h4>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="publishOption"
                  value="draft"
                  className="text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <div>
                  <div className="font-medium text-gray-900">Save as Draft</div>
                  <div className="text-sm text-gray-600">Course won't be visible to students</div>
                </div>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="publishOption"
                  value="review"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-900">Submit for Review</div>
                  <div className="text-sm text-gray-600">Course will be reviewed before publishing</div>
                </div>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="publishOption"
                  value="publish"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="font-medium text-gray-900">Publish Immediately</div>
                  <div className="text-sm text-gray-600">Course will be live and available to students</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Review & Publish</h3>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-2xl font-bold">{courseData.title || 'Course Title'}</h2>
              <p className="text-blue-100">{courseData.subtitle || 'Course subtitle'}</p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Course Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{courseData.category || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium capitalize">{courseData.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-medium capitalize">{courseData.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-lg text-green-600">
                      {courseData.price ? `$${courseData.price}` : 'Free'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Content Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modules:</span>
                    <span className="font-medium">{courseData.modules.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lessons:</span>
                    <span className="font-medium">
                      {courseData.modules.reduce((total, module) => total + module.lessons.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Requirements:</span>
                    <span className="font-medium">{courseData.requirements.filter(r => r.trim()).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Objectives:</span>
                    <span className="font-medium">{courseData.objectives.filter(o => o.trim()).length}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {courseData.description && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{courseData.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Create New Course</h1>
                <p className="text-sm text-gray-600">Step {currentStep} of 4</p>
              </div>
            </div>
            
           <div className="flex items-center space-x-3">
  {/* Save Draft */}
  <button
    type="button"
    onClick={handleSaveDraft} // Add click handler
    className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <Save className="w-4 h-4" />
    <span>Save Draft</span>
  </button>

  {/* Preview */}
  <button
    type="button"
    className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
  >
    <Eye className="w-4 h-4" />
    <span>Preview</span>
  </button>
</div>

          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-3">
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStep(step.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : isCompleted
                            ? 'bg-green-50 text-green-700 hover:bg-green-100'
                            : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-8">
  {currentStep === 1 && renderStep1()}
  {currentStep === 2 && renderStep2()}
  {currentStep === 3 && renderStep3()}
  {currentStep === 4 && renderStep4()}
</div>

              
              <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    currentStep === 1 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Previous
                </button>
                
                {currentStep === 4 ? (
                  <button className="px-8 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Publish Course</span>
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;