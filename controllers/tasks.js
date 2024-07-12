const Testimonial = require("../models/testimonial");
const Menupreview = require("../models/menuPreview");
const Introimage = require("../models/introImages");
const Shortmenuitem = require("../models/shortmenuitem");
const Side = require("../models/side");
const Addon = require("../models/addon");
const Storyitem = require("../models/storyitem");
const Employee = require("../models/employees");
const Mission = require("../models/mission");
const Plan = require("../models/plan");

const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json({ testimonials });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllMenuPreviews = async (req, res) => {
  try {
    const menupreviews = await Menupreview.find({});
    res.status(200).json({ menupreviews });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllIntroImages = async (req, res) => {
  try {
    const introimages = await Introimage.find({});
    res.status(200).json({ introimages });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllShortMenuItems = async (req, res) => {
  try {
    const shortmenuitems = await Shortmenuitem.find({});
    res.status(200).json({ shortmenuitems });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllSides = async (req, res) => {
  try {
    const sides = await Side.find({});
    res.status(200).json({ sides });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllAddons = async (req, res) => {
  try {
    const addons = await Addon.find({});
    res.status(200).json({ addons });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleMenuItem = async (req, res) => {
  const { id: menuitemid } = req.params;
  const menuitem = await Shortmenuitem.findOne({ _id: menuitemid });
  if (!menuitem) {
    return res
      .status(404)
      .json({ msg: `No menu item with id :  ${menuitemid}` });
  }

  res.status(200).json({ menuitem });
};

const getAllStoryItems = async (req, res) => {
  try {
    const storyitems = await Storyitem.find({});
    res.status(200).json({ storyitems });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json({ employees });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllMissions = async (req, res) => {
  try {
    const missions = await Mission.find({});
    res.status(200).json({ missions });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.status(200).json({ plans });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTestimonials,
  getAllMenuPreviews,
  getAllIntroImages,
  getAllShortMenuItems,
  getAllSides,
  getAllAddons,
  getSingleMenuItem,
  getAllStoryItems,
  getAllEmployees,
  getAllMissions,
  getAllPlans,
};
