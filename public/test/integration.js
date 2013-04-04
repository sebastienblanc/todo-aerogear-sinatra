(function( $ ) {

var pipeline = aerogear.pipeline([
        {
            name: "tasks",
            settings: {
                url: "/tasks"
            }
        },
        {
            name: "projects",
            settings: {
                url: "/projects"
            }
        },
        {
            name: "tags",
            settings: {
                url: "/tags"
            }
        }
    ]),
    Tasks = pipeline.pipes.tasks,
    Projects = pipeline.pipes.projects,
    Tags = pipeline.pipes.tags;

module( "TODO Project" );
asyncTest( "create, modify and delete", function() {
    expect( 6 );

    Projects.save({
        title: "New Project",
        style: "project-255-0-0"
    },
    {
        ajax: {
            success: function( data, textStatus, jqXHR ) {
                equal( data.title, "New Project", "Project title correct" );
                equal( data.style, "project-255-0-0", "Project style correct" );

                Projects.save({
                    id: data.id,
                    title: "Modified Project"
                },
                {
                    ajax: {
                        success: function( data, textStatus, jqXHR ) {
                            equal( data.title, "Modified Project", "Project title correct" );
                            equal( data.style, "project-255-0-0", "Project style unchanged" );

                            Projects.remove( data.id, {
                                ajax: {
                                    success: function( data, textStatus, jqXHR ) {
                                        equal( textStatus, "success", "Project deleted" );
                                        ok( data && data.tasks && data.tasks.length >= 0, "Task list returned");
                                        start();
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
});

module( "TODO Tag" );
asyncTest( "create, modify and delete", function() {
    expect( 6 );

    Tags.save({
        title: "New Tag",
        style: "tag-255-0-0"
    },
    {
        ajax: {
            success: function( data, textStatus, jqXHR ) {
                equal( data.title, "New Tag", "Tag title correct" );
                equal( data.style, "tag-255-0-0", "Project style correct" );

                Tags.save({
                    id: data.id,
                    title: "Modified Tag"
                },
                {
                    ajax: {
                        success: function( data, textStatus, jqXHR ) {
                            equal( data.title, "Modified Tag", "Tag title correct" );
                            equal( data.style, "tag-255-0-0", "Tag style unchanged" );

                            Tags.remove( data.id, {
                                ajax: {
                                    success: function( data, textStatus, jqXHR ) {
                                        equal( textStatus, "success", "Tag deleted" );
                                        ok( data && data.tasks && data.tasks.length >= 0, "Task list returned");
                                        start();
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
});

module( "TODO Task" );
asyncTest( "create, modify and delete", function() {
    expect( 11 );

    Tasks.save({
        title: "New Task",
        date: "2012-10-09",
        description: "Task description"
    },
    {
        ajax: {
            success: function( data, textStatus, jqXHR ) {
                equal( data.title, "New Task", "Task title correct" );
                equal( data.date, "2012-10-09", "Task date correct" );
                equal( data.description, "Task description", "Task description correct" );
                equal( data.tags.length, 0, "Empty tag array" );
                equal( data.project, null, "Null project" );

                Tasks.save({
                    id: data.id,
                    title: "Modified Task"
                },
                {
                    ajax: {
                        success: function( data, textStatus, jqXHR ) {
                            equal( data.title, "Modified Task", "Task title correct" );
                            equal( data.date, "2012-10-09", "Task date unchanged" );
                            equal( data.description, "Task description", "Task description unchanged" );
                            equal( data.tags.length, 0, "Empty tag array unchanged" );
                            equal( data.project, null, "Null project unchanged" );

                            Tasks.remove( data.id, {
                                ajax: {
                                    success: function( data, textStatus, jqXHR ) {
                                        equal( textStatus, "success", "Task deleted" );
                                        start();
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
});

})( jQuery );

module( "TODO Authentication" );

test('User login', function() {
    ok(1==1,"TODO");
});

test('User logout', function() {
    ok(1==1,"TODO");
});

test('User registration', function() {
    ok(1==1,"TODO");
});

test('TODO', function() {
    ok(1==1,"TODO");
});
