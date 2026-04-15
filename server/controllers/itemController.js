import Item from '../models/item.js';

// 1. Create a new report
export const createItem = async (req, res) => {
    try {
        const { title, description, category, type, location } = req.body;
        const newItem = new Item({
            title,
            description,
            category,
            type,
            location,
            reportedBy: req.userId // Populated by authMiddleware
        });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: "Failed to report item", error: error.message });
    }
};

// 2. Get all items for the Home feed
export const getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('reportedBy', 'name').sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items" });
    }
};

// 3. Get one specific item for the Details page
export const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('reportedBy', 'name email');
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: "Invalid ID format" });
    }
};