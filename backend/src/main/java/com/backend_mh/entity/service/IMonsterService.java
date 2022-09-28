package com.backend_mh.entity.service;

import java.util.List;

import com.backend_mh.entity.model.Monster;

public interface IMonsterService {

	public Monster get(long id);
	public List<Monster> getAll();
	public void post(Monster monster);
	public void put(Monster monster, long id);
	public void delete(long id);

}
